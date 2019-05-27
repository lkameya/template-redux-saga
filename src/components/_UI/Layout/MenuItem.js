import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    fontSize: '12',
  },
});

class MenuItem extends React.Component {
  state = { open: false };

  handleClick = (path) => {
    const { history } = this.props;
    if (path)
      history.push(path);
    else {
      this.setState(state => ({ open: !state.open }));
    }
  };

  render() {
    const { page, history } = this.props;
    return (
      <div >
        <ListItem button onClick={() => this.handleClick(page.path)} style={{ paddingLeft: page.margin }}>
          <ListItemIcon>
            <page.icon />
          </ListItemIcon>
          <ListItemText primary={page.name} />
          {page.subItems && (this.state.open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {page.subItems &&
          page.subItems.map((subPage, i) => (
            <Collapse in={this.state.open} timeout="auto" key={i} >
              <MenuItem page={subPage} history={history} />
            </Collapse>
          ))
        }
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(MenuItem));
