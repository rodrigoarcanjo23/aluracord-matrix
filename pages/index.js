


import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json';




function Titulo(props) {
  console.log(props);
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
           color: ${appConfig.theme.colors.neutrals['000']}
           font-size: 24px;
           font-weight: 600;
       }  
       `}
      </style>
    </>
  );
}

// Componente react
//function HomePage() {
// jsx
// return (
//<div>
//<GlobalStyle/>
//  <Title tag="h1">Boas vindas de volta!</Title>
//<h2>Discord - Alura Matriix</h2>

//</div>
//)
//} 

//export default HomePage


export default function PaginaInicial() {
 //const username = 'rodrigoarcanjo23';
 const [username, setUsername] = React.useState('rodrigoarcanjo23');
 const roteamento = useRouter();

 


  return (
    <>
      
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://lh5.googleusercontent.com/proxy/JTXF0XwJqSFH7mOtQCC-wT93VAKBN3f7MlsnT64t_fonAvuX_XYoRmU-HehhXCI22HX2vyO7nz0fciEJ9NDEs4t8vtNe7P5cRsB4wCQ0kVKUiFGvwt25pl4NiEYJE2xwkG-ZI-eCqS5pChFiUz4_UIBbypMalksFHojhvZ_-=w1200-h630-p-k-no-nu)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('Alguem sumbmeteu o form');
              window.location.href = '/chat';
              roteamento.push('/chat');
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Vamos construir juntos um novo mundo!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

          {/*<input
           type="text" 
          value={username}
          onChange={function handler(event){
            console.log('usuario digitou', event.target.value);
            // onde está o valor
            const valor = event.target.value;
            //trocar o valor da variavél//
            // através do React e avise quem precisa
            setUsername(valor);

          }}
        /> */}
            <TextField
              value={username} onChange={function handler(event){
                console.log('usuario digitou', event.target.value);
                // onde está o valor
                const valor = event.target.value;
                //trocar o valor da variavél//
                // através do React e avise quem precisa
                setUsername(valor);
    
              }}
              
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals[700],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
