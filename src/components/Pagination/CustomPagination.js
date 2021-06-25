import { createMuiTheme,ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import  "./CustomPagination.css";

const darkTheme = createMuiTheme({
    palette:{
        type:"dark",
    },
});
const CustomPagination = ({setPage,numofPages=10}) => {

    const handlePageChange = (page)=>{
        setPage(page);
        window.scroll(0,0);
    };
    


    return (

        <div className="pagination">
            <ThemeProvider theme={darkTheme}>
            <Pagination 
            count={numofPages}
            onChange={(e)=>handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
            color="primary"/>
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination
