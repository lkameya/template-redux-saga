import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Fab from '@material-ui/core/Fab';
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";

const defaultFooterStyles = {
  root: {
    "&:last-child div:nth-child(3) > div > div": {
      paddingRight: '18px',
    }
  },
  fab: {
    position: 'absolute',
    left: '50%',
    zIndex: '999'
  }
};

class CustomFooter extends React.Component {
  handleClick = () => {
    alert("Click no botão");
  };

  render() {
    const { classes } = this.props;

    return (
      <TableFooter>
        <TableRow>
          <TableCell>
            <React.Fragment>
              <Tooltip title={"Incluir usuário"}>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.props.openDialog}>
                  <AddIcon />
                </Fab>
              </Tooltip>
            </React.Fragment>
          </TableCell>
          <TablePagination
            className={classes.root}
            count={this.props.count}
            page={this.props.page}
            rowsPerPage={this.props.rowsPerPage}
            onChangePage={this.props.onChangePage}
            onChangeRowsPerPage={this.props.onChangeRowsPerPage}
            labelRowsPerPage={this.props.paginationLabel}
          />
        </TableRow>
      </TableFooter>
    );
  }
}

export default withStyles(defaultFooterStyles)(
  CustomFooter
);
