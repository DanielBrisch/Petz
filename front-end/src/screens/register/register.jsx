import * as React from 'react';
import Header from './AppBar';
import { Box, Typography } from '@mui/material';
import ContainerRegister from './ContainerRegister';


function Register() {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Header/>
            <Box  sx={{ 
                backgroundColor: "#eee", 
                width: '100vw', 
                height: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}> 
                <ContainerRegister/>
                <Box>
                    <Typography sx={{fontWeight: '400', fontSize: "1.09375rem"}}>Criar uma conta é rápido, fácil e gratuito</Typography>
                    <Box sx={{ pt: '1em'}}>
                        <Typography sx={{fontSize: 'large', fontWeight: '400', color: "#626262"}} >Com a sua conta da Petz você tem acesso a Ofertas</Typography>
                        <Typography sx={{pt: '0.2em', fontSize: 'large', fontWeight: '400', color: "#626262"}} >exclusivas, descontos, vai gerenciar a sua Assinatura Petz</Typography>
                        <Typography sx={{pt: '0.2em', fontSize: 'large', fontWeight: '400', color: "#626262"}} >pode acompanhar os seus pedidos e muito mais!</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Register