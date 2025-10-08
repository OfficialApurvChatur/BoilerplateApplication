import parse from 'html-react-parser';


const htmlParsedUtility = ( htmlString: string ) => {
  return htmlString.split('\n').map((each) => parse(each))
}

export default htmlParsedUtility;
