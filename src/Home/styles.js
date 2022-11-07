import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  // ESTILOS
container:{
    margin: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: '#000',
	display:'flex',
},
containerimg:{
    marginTop: '100px',
    position: 'relative',
    marginLeft: '55%',
},
containerimgimg:{
    textAlign: 'right',
    position: 'absolute',
},
containerimgimg2:{
	textAlign: 'right',
	position: 'absolute',
	width: '300px',
	height: '500px',
	marginLeft: '80px',
},

content:{
	position: 'absolute',
	top: '50%',
	left:'8%',
	transform: 'translateY(-50%)',
},


  
  

  [theme.breakpoints.down("lg")]: {
    container:{
        margin: '0',
        width: '100%',
        height: '200vh',
        backgroundColor: '#000',

    },
    containerimg:{
        marginLeft: '20% ',
        marginTop:'50%',
    },
    content:{
        top: '50%',
        left:'8%',
        transform: 'translateY(-50%)',
        zIndex:'1',
        
    },
    
  },
  [theme.breakpoints.down("md")]: {
    containerimg:{
        marginLeft: '20%',
        marginTop:'70%',
        
    },
    container:{
        margin: '0',
        width: '100%',
        height: '170vh',
        backgroundColor: '#000',

    },

  },
  [theme.breakpoints.down("sm")]: {
    containerimg:{
        marginLeft: '0',
        marginTop:'120%',
    },
  },
  [theme.breakpoints.down("xs")]: {},

}))

