const { createApp } = Vue;

createApp({
    data(){
        return{
            message: 'UN SALUTO DA NAGATOMO',
            image: "https://icdn.sempreinter.com/wp-content/uploads/2015/08/nagatomo-1024x683.jpg" ,
            description: 'Nagatomo che applaude' ,
            textColor: 'color',
            sfondo: 'blue',
            grandezza: 'pic'
        }
    },
    
}).mount('#app')
