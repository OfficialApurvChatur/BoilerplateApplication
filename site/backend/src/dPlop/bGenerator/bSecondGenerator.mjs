
export default function bSecondGenerator(plop) {
  plop.setGenerator("b-second-generator", {
    description: "bSecondGenerator Generator",

    prompts: [],

    actions() {

      const templates = [
        // Backend
        {
          path: "backend/aModel.hbs",
          template: "Hello There..."
        },
        {
          path: "backend/bController.hbs",
          template: "Hello There..."
        },
        {
          path: "backend/cValidation.hbs",
          template: "Hello There..."
        },
        {
          path: "backend/dRoute.hbs",
          template: "Hello There..."
        },
        {
          path: "backend/eService.hbs",
          template: "Hello There..."
        },

        // Frontend
        // API
        {
          path: "frontend/aAPI/index.hbs",
          template: "Hello There..."
        },

        // Components
        {
          path: "frontend/cComponent/aList/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/cComponent/bCreate/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/cComponent/cRetrieve/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/cComponent/dUpdate/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/cComponent/eDelete/index.hbs",
          template: "Hello There..."
        },

        // Pages
        // List
        {
          path: "frontend/fPage/aList/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/aList/aListHeader.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/aList/bListSchema.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/aList/cListColumn.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/aList/dAPIHandler.hbs",
          template: "Hello There..."
        },

        // Create
        {
          path: "frontend/fPage/bCreate/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/bCreate/aFormHeader.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/bCreate/bFormData.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/bCreate/cFormValueSchema.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/bCreate/dFormValueDefault.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/bCreate/eAPIHandler.hbs",
          template: "Hello There..."
        },

        // Retrieve
        {
          path: "frontend/fPage/cRetrieve/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/cRetrieve/aPageHeader.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/cRetrieve/bPageData.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/cRetrieve/cAPIHandler.hbs",
          template: "Hello There..."
        },

        // Update
        {
          path: "frontend/fPage/dUpdate/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/dUpdate/aFormHeader.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/dUpdate/bFormData.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/dUpdate/cFormValueSchema.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/dUpdate/dFormValueDefault.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/dUpdate/eFormValuePrevious.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/dUpdate/fAPIHandler.hbs",
          template: "Hello There..."
        },

        // Delete
        {
          path: "frontend/fPage/eDelete/index.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/eDelete/aPageHeader.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/eDelete/bPageData.hbs",
          template: "Hello There..."
        },
        {
          path: "frontend/fPage/eDelete/cAPIHandler.hbs",
          template: "Hello There..."
        },
      ];

      return templates.map(({path, template}) => ({
        type: "add",
        path: `src/dPlop/eTemplate/${path}`,
        template,
        skipIfExists: true,
      }));
    },
  });
}
