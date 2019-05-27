import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHeaderColumn from '@material-ui/core/TableCell';
import TableHeader from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Check from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const row = (x, i, header, handleRemove, startEditing, editIdx, handleChange, stopEditing) => {
  const currentlyEditing = editIdx === i;

  return (
    <TableRow key={`tr-${i}`} selectable={false}>
      {header.map((y, k) =>
        <TableCell key={`trc==${k}`}>
          {currentlyEditing ? <TextField name={y.prop} onChange={e => handleChange(e, y.prop, i)} value={x[y.prop]} /> : x[y.prop]}
        </TableCell>
      )}
      <TableCell>
        {currentlyEditing ? (
          <Check onClick={() => stopEditing(i)} />
        ) : <Edit onClick={() => startEditing(i)} />}
      </TableCell>
      <TableCell>
        <Delete onClick={() => handleRemove(i)} />
      </TableCell>
    </TableRow>
  )
};

function SimpleTable({ data, headers, classes, handleRemove, startEditing, editIdx, handleChange, stopEditing }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHeader>
          <TableRow>
            {headers.map((x, i) =>
              <TableHeaderColumn key={`trc-${i}`}>
                {x.nome}
              </TableHeaderColumn>
            )}
            <TableHeaderColumn />
            <TableHeaderColumn />
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((x, i) =>
            row(x, i, headers,
              handleRemove,
              startEditing,
              editIdx,
              handleChange,
              stopEditing
            ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
