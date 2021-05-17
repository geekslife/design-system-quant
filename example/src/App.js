import React, { useState } from 'react'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuIcon,
  ChevronRightIcon,
  EqualizerIcon,
  EditAttributesIcon,
  PublishIcon,
  makeStyles
} from 'design-system-quant'
import 'design-system-quant/dist/index.css'
import clsx from 'clsx'
import { Main } from './Main'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  console.log(theme)
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(3),
      color: 'white'
    },
    closeButton: {
      color: 'white'
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    divider: {
      backgroundColor: theme.palette.grey[800]
    },
    listHeader: {
      color: theme.palette.grey[400]
    },
    menuItem: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      color: theme.palette.grey[50],
      '&:hover': {
        backgroundColor: theme.palette.grey[800]
      }
    },
    menuItemIcon: {
      color: theme.palette.grey[600]
    },
    menuItemTextIcon: {
      width: theme.spacing(3)
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  }
})
const App = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  return (
    <div className={classes.root}>
      <AppBar className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
        <Toolbar>
          <IconButton
            edge='start'
            onClick={() => setOpen(true)}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Example
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        variant='permanent'
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={() => setOpen(false)}
            className={classes.closeButton}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider className={classes.divider} />
        <List
          subheader={
            <ListSubheader className={classes.listHeader}>Alpha</ListSubheader>
          }
        >
          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <EqualizerIcon />
            </ListItemIcon>
            <ListItemText primary='Status' />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <EditAttributesIcon />
            </ListItemIcon>
            <ListItemText primary='Test' />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <PublishIcon />
            </ListItemIcon>
            <ListItemText primary='Submit' />
          </ListItem>
        </List>
        <Divider className={classes.divider} />
        <List
          subheader={
            <ListSubheader className={classes.listHeader}>Module</ListSubheader>
          }
        >
          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <EqualizerIcon />
            </ListItemIcon>
            <ListItemText primary='Status' />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <EditAttributesIcon />
            </ListItemIcon>
            <ListItemText primary='Test' />
          </ListItem>
          <ListItem button className={classes.menuItem}>
            <ListItemIcon className={classes.menuItemIcon}>
              <PublishIcon />
            </ListItemIcon>
            <ListItemText primary='Submit' />
          </ListItem>
        </List>
        <Divider className={classes.divider} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        <Main />
      </main>
    </div>
  )
}

export default App
