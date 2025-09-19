# Root path of controllers
$basePath = "src\bLove\aMCVR\dRoute"

# Template (with placeholders for replacement)
$template = @'
import express from 'express';

import rateLimiterMiddleware from '../../../../bMiddleware/cRateLimiterMiddleware';
import authenticationMiddleware from '../../../../bMiddleware/dAuthenticationMiddleware';
import authorizationMiddleware from '../../../../bMiddleware/eAuthorizationMiddleware';
import checkCacheMiddleware from '../../../../bMiddleware/fCheckCacheMiddleware';
import validatorMiddleware from '../../../../bMiddleware/gValidationMiddleware';
import personalInfoMiddleware from '../../../../bMiddleware/hPersonalInfoMiddleware';

import __VALIDATION__ from '__VALIDATION_PATH__';
import __CONTROLLER__ from '__CONTROLLER_PATH__';


const router = express.Router();

router.route("/list").get(
  rateLimiterMiddleware({ key:"__LABEL__-list", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "__ENTITY__", accessPoint: ["List"] }),
  checkCacheMiddleware({ key:"__LABEL__-list", label: "__ENTITY__", name: "List" }), 
  __VALIDATION__.list(), validatorMiddleware, 
  __CONTROLLER__().list
)

router.route("/create").post(
  rateLimiterMiddleware({ key:"__LABEL__-create", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "__ENTITY__", accessPoint: ["Create"] }),
  __VALIDATION__.create(), validatorMiddleware,
  personalInfoMiddleware({ type: "created" }),
  __CONTROLLER__().create
)

router.route("/retrieve/:id").get(
  rateLimiterMiddleware({ key:"__LABEL__-retrieve", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "__ENTITY__", accessPoint: ["Retrieve"] }),
  checkCacheMiddleware({ key:"__LABEL__-retrieve", label: "__ENTITY__", name: "Retrieve" }), 
  __VALIDATION__.retrieve(), validatorMiddleware, 
  __CONTROLLER__().retrieve
)

router.route("/update/:id").put(
  rateLimiterMiddleware({ key:"__LABEL__-update", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "__ENTITY__", accessPoint: ["Update"] }),
  __VALIDATION__.update(), validatorMiddleware, 
  personalInfoMiddleware({ type: "updated" }),
  __CONTROLLER__().update
)

router.route("/delete/:id").delete(
  rateLimiterMiddleware({ key:"__LABEL__-delete", time: 60, limit: 10 }),
  authenticationMiddleware,
  authorizationMiddleware({ menu: "__ENTITY__", accessPoint: ["Delete"] }),
  __VALIDATION__.delete(), validatorMiddleware, 
  __CONTROLLER__().delete
)

export const __ROUTE__ = router
'@

function Get-CamelCaseName($entity) {
    if ([string]::IsNullOrWhiteSpace($entity)) { return $entity }

    # Split into "words" based on uppercase boundaries
    $parts = ($entity -creplace '([A-Z][a-z]+)', ' $1' -creplace '([A-Z]+)(?=[A-Z][a-z])', ' $1').Trim().Split(" ")

    # First word: all lowercase (API -> api, HTML -> html, User -> user)
    $camel = $parts[0].ToLower()

    # Rest of the words: keep first letter uppercase (Log -> Log, Parser -> Parser, Point -> Point)
    if ($parts.Length -gt 1) {
        $camel += ($parts[1..($parts.Length-1)] | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() }) -join ""
    }

    return "$camel" + "Route"
}


Get-ChildItem -Path $basePath -Recurse -Filter "*Route.ts" | ForEach-Object {
    $fileName = $_.BaseName
    # Write-Host "[OK] Generated aFileName for $fileName"

    $entity   = $fileName.Substring(1) -replace "Route",""
    # Write-Host "[OK] Generated Entitiy for $entity"

    $entityClean = $entity.Substring(0,1).ToUpper() + $entity.Substring(1)
    # Write-Host "[OK] Generated Entitiy for $entityclean"

    $routeName = Get-CamelCaseName $entity
    # Write-Host "[OK] Generated routeName for $routeName"

    $modalFileName = $fileName -replace "Route","Model"
    # Write-Host "[OK] Generated aModalFileName for $modalFileName"

    $controllerFileName = $fileName -replace "Route","Controller"
    # Write-Host "[OK] Generated aControllerFileName for $modalFileName"

    $validationFileName = $fileName -replace "Route","Validation"
    # Write-Host "[OK] Generated aValidationFileName for $validationFileName"

    $modalName = $entityClean + "Model"
    # Write-Host "[OK] Generated ModalName for $modalName"

    $controllerName = $routeName -replace "Route","Contorller"
    # Write-Host "[OK] Generated controllerName for $controllerName"

    $validationName = $routeName -replace "Route","Validation"
    # Write-Host "[OK] Generated validationName for $validationName"

    $subFolder = $_.Directory.Name   # e.g., "aSetting", "bUserAdministration"
    # Write-Host "[OK] Generated subFolder for $subFolder"

    $modelPath = "../../../aModel/aDatabaseManagement/$subFolder/$modalFileName"
    # Write-Host "[OK] Generated modelPath for $modelPath"

    $controllerPath = "../../../bController/aDatabaseManagement/$subFolder/$controllerFileName"
    # Write-Host "[OK] Generated controllerPath for $controllerPath"

    $validationPath = "../../../cValidation/aDatabaseManagement/$subFolder/$validationFileName"
    # Write-Host "[OK] Generated validationPath for $validationPath"

    $content = $template -replace "__ROUTE__", $routeName `
                     -replace "__VALIDATION__", $validationName `
                     -replace "__VALIDATION_PATH__", $validationPath `
                     -replace "__CONTROLLER__", $controllerName `
                     -replace "__CONTROLLER_PATH__", $controllerPath `
                     -replace "__LABEL__", $modalName `
                     -replace "__ENTITY__", $entity

    Set-Content -Path $_.FullName -Value $content -Encoding UTF8
    Write-Host "[OK] Generated route for $fileName"

    # powershell -ExecutionPolicy Bypass -File .\powershell.ps1
}
