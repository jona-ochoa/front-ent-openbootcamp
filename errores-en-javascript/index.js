const logger = require("./logger");

const errorWinston = () => {
    try {
      console.log(a)
    } catch (error) {
        logger.error("Este es un mensaje de Error en BootCamp");
    }
  };
  
  const mostrar = errorWinston();
