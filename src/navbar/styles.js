import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  // ESTILOS

  navbar:{
    
    backgroundColor:'#000',
    position: 'fixed',
    zIndex: '100',
    height: '50px',
    margin: 'auto',
    width: '100%'
  },
  navbarcontent:{
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    paddingTop: '15px',
    color: '#fff',
 },
 navbarbutton:{
    marginLeft: '20px',
    textTransform: 'capitalize',
    fontSize: '17px',
    cursor: 'pointer',
    display: 'inline-Block',
    position: 'relative',
    ':after':{
        content: '',
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(0)',
        height: '2px',
        bottom: '0',
        left: '0',
        backgroundColor: '#fff',
        transformOrigin: 'bottom right',
        transition: 'transform 0.25s ease-out',
    },
   ':hover:after':{
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
},

  
  

  [theme.breakpoints.down("lg")]: {
    navbar:{

    }
  },
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},

}))

