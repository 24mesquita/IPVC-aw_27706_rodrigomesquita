import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  body:{
  margin:'0',
  width:'100vw',
  height:'100vh',
  },
  container:{
      width:'100%',
      height:'100vh',
      backgroundColor:'red',

  },
  section:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },

  // ESTILOS
  [theme.breakpoints.down("lg")]: {

  },
  [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {

  },
  [theme.breakpoints.down("xs")]: {},

}))

