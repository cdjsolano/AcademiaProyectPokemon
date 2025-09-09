import React from 'react'
import Agua from '../pages/Agua';
import Home from '../pages/Home';

function Principalarray() {

    const pokemons = [
        {
            nombre: 'Bulbasaur',
            tipo: 'Planta',
            descripcion: 'Tiene una semilla en la espalda que crece con la energía solar.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            estadisticas: { hp: 45, ataque: 49, defensa: 49, spAtaque: 65, spDefensa: 65, velocidad: 45 },
            habilidades: ['Espesura', 'Clorofila']
        },
        {
            nombre: 'Ivysaur',
            tipo: 'Planta',
            descripcion: 'La semilla en su espalda florece cada vez más conforme se fortalece.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            estadisticas: { hp: 60, ataque: 62, defensa: 63, spAtaque: 80, spDefensa: 80, velocidad: 60 },
            habilidades: ['Espesura', 'Clorofila']
        },
        {
            nombre: 'Venusaur',
            tipo: 'Planta',
            descripcion: 'Su flor en la espalda desprende un aroma calmante y lanza ráfagas de pétalos.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            estadisticas: { hp: 80, ataque: 82, defensa: 83, spAtaque: 100, spDefensa: 100, velocidad: 80 },
            habilidades: ['Espesura', 'Clorofila']
        },
        {
            nombre: 'Charmander',
            tipo: 'Fuego',
            descripcion: 'Lleva una llama en la cola que indica su estado de ánimo y salud.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
            estadisticas: { hp: 39, ataque: 52, defensa: 43, spAtaque: 60, spDefensa: 50, velocidad: 65 },
            habilidades: ['Mar Llamas', 'Piel Seca']
        },
        {
            nombre: 'Charmeleon',
            tipo: 'Fuego',
            descripcion: 'Con su temperamento agresivo, arroja llamas más intensas en combate.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
            estadisticas: { hp: 58, ataque: 64, defensa: 58, spAtaque: 80, spDefensa: 65, velocidad: 80 },
            habilidades: ['Mar Llamas', 'Piel Seca']
        },
        {
            nombre: 'Charizard',
            tipo: 'Fuego',
            descripcion: 'Sus alas le permiten volar largas distancias y expide fuego capaz de derretir acero.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            estadisticas: { hp: 78, ataque: 84, defensa: 78, spAtaque: 109, spDefensa: 85, velocidad: 100 },
            habilidades: ['Mar Llamas', 'Piel Seca']
        },
        {
            nombre: 'Squirtle',
            tipo: 'Agua',
            descripcion: 'Retrae su cuello para disparar chorros de agua a gran presión.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
            estadisticas: { hp: 44, ataque: 48, defensa: 65, spAtaque: 50, spDefensa: 64, velocidad: 43 },
            habilidades: ['Torrente', 'Cascada']
        },
        {
            nombre: 'Wartortle',
            tipo: 'Agua',
            descripcion: 'Su cola con forma de ala le ayuda a nadar velozmente en el agua.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
            estadisticas: { hp: 59, ataque: 63, defensa: 80, spAtaque: 65, spDefensa: 80, velocidad: 58 },
            habilidades: ['Torrente', 'Cascada']
        },
        {
            nombre: 'Blastoise',
            tipo: 'Agua',
            descripcion: 'Dispone de dos cañones de agua en el caparazón para ataques de largo alcance.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
            estadisticas: { hp: 79, ataque: 83, defensa: 100, spAtaque: 85, spDefensa: 105, velocidad: 78 },
            habilidades: ['Torrente', 'Cascada']
        },
        {
            nombre: 'Caterpie',
            tipo: 'Bicho',
            descripcion: 'Se moviliza con facilidad gracias a su cuerpo segmentado y produce seda pegajosa.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
            estadisticas: { hp: 45, ataque: 30, defensa: 35, spAtaque: 20, spDefensa: 20, velocidad: 45 },
            habilidades: ['Enjambre', 'Polvo Arena']
        },
        {
            nombre: 'Metapod',
            tipo: 'Bicho',
            descripcion: 'Protegido por un caparazón, permanece inmóvil mientras se fortalece para evolucionar.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
            estadisticas: { hp: 50, ataque: 20, defensa: 55, spAtaque: 25, spDefensa: 25, velocidad: 30 },
            habilidades: ['Cabecdura', 'Cuerpo Puro']
        },
        {
            nombre: 'Butterfree',
            tipo: 'Bicho',
            descripcion: 'Con alas grandes, revolotea liberando polvos alucinógenos a sus presas.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
            estadisticas: { hp: 60, ataque: 45, defensa: 50, spAtaque: 90, spDefensa: 80, velocidad: 70 },
            habilidades: ['Cuerpo Puro', 'Ojo Compuesto']
        },
        {
            nombre: 'Weedle',
            tipo: 'Bicho',
            descripcion: 'Tiene un aguijón venenoso en la cabeza y otro en la cola.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
            estadisticas: { hp: 40, ataque: 35, defensa: 30, spAtaque: 20, spDefensa: 20, velocidad: 50 },
            habilidades: ['Punto Toxicógeno', 'Multiescamas']
        },
        {
            nombre: 'Kakuna',
            tipo: 'Bicho',
            descripcion: 'Inmóvil en su capullo, almacena energía para su evolución.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
            estadisticas: { hp: 45, ataque: 25, defensa: 50, spAtaque: 25, spDefensa: 25, velocidad: 35 },
            habilidades: ['Punto Toxicógeno', 'Multiescamas']
        },
        {
            nombre: 'Beedrill',
            tipo: 'Bicho',
            descripcion: 'Sus aguijones triples pueden infligir envenenamiento rápido en el enemigo.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
            estadisticas: { hp: 65, ataque: 90, defensa: 40, spAtaque: 45, spDefensa: 80, velocidad: 75 },
            habilidades: ['Enjambre', 'Toxicidad']
        },
        {
            nombre: 'Pidgey',
            tipo: 'Normal',
            descripcion: 'Pequeño y dócil, frecuenta praderas buscando semillas.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
            estadisticas: { hp: 40, ataque: 45, defensa: 40, spAtaque: 35, spDefensa: 35, velocidad: 56 },
            habilidades: ['Vista Lince', 'Despeje']
        },
        {
            nombre: 'Pidgeotto',
            tipo: 'Normal',
            descripcion: 'Vigila su territorio con gran agudeza visual desde el aire.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
            estadisticas: { hp: 63, ataque: 60, defensa: 55, spAtaque: 50, spDefensa: 50, velocidad: 71 },
            habilidades: ['Vista Lince', 'Despeje']
        },
        {
            nombre: 'Pidgeot',
            tipo: 'Normal',
            descripcion: 'Vuela a velocidades increíbles, capaz de crear corrientes de viento con sus alas.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
            estadisticas: { hp: 83, ataque: 80, defensa: 75, spAtaque: 70, spDefensa: 70, velocidad: 101 },
            habilidades: ['Vista Lince', 'Despeje']
        },
        {
            nombre: 'Rattata',
            tipo: 'Normal',
            descripcion: 'Roedor resistente, se reproduce en gran cantidad y ataca en grupo.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
            estadisticas: { hp: 30, ataque: 56, defensa: 35, spAtaque: 25, spDefensa: 35, velocidad: 72 },
            habilidades: ['Agallas', 'Tensión']
        },
        {
            nombre: 'Raticate',
            tipo: 'Normal',
            descripcion: 'Sus poderosos incisivos pueden roer casi cualquier material.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
            estadisticas: { hp: 55, ataque: 81, defensa: 60, spAtaque: 50, spDefensa: 70, velocidad: 97 },
            habilidades: ['Agallas', 'Tensión']
        },
        {
            nombre: 'Spearow',
            tipo: 'Normal',
            descripcion: 'Agresivo y pequeño, ataca con picotazos rápidos.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
            estadisticas: { hp: 40, ataque: 60, defensa: 30, spAtaque: 31, spDefensa: 31, velocidad: 70 },
            habilidades: ['Punto Coraza', 'Despeje']
        },
        {
            nombre: 'Fearow',
            tipo: 'Normal',
            descripcion: 'Con su largo pico, puede perforar objetivos a gran velocidad.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
            estadisticas: { hp: 65, ataque: 90, defensa: 65, spAtaque: 61, spDefensa: 61, velocidad: 100 },
            habilidades: ['Punto Coraza', 'Despeje']
        },
        {
            nombre: 'Ekans',
            tipo: 'Veneno',
            descripcion: 'Se enrosca alrededor de su presa para inmovilizarla con veneno.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
            estadisticas: { hp: 35, ataque: 60, defensa: 44, spAtaque: 40, spDefensa: 54, velocidad: 55 },
            habilidades: ['Intimidación', 'Molusco']
        },
        {
            nombre: 'Arbok',
            tipo: 'Veneno',
            descripcion: 'Su vientre muestra un patrón aterrador que asusta a sus enemigos.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
            estadisticas: { hp: 60, ataque: 95, defensa: 69, spAtaque: 65, spDefensa: 79, velocidad: 80 },
            habilidades: ['Intimidación', 'Molusco']
        },
        {
            nombre: 'Pikachu',
            tipo: 'Eléctrico',
            descripcion: 'Almacena electricidad en sus mejillas y la descarga cuando se enfada.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            estadisticas: { hp: 35, ataque: 55, defensa: 40, spAtaque: 50, spDefensa: 50, velocidad: 90 },
            habilidades: ['Electricidad Estática', 'Pararrayos']
        },
        {
            nombre: 'Raichu',
            tipo: 'Eléctrico',
            descripcion: 'Mayor capacidad eléctrica que Pikachu y cola en forma de rayo.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
            estadisticas: { hp: 60, ataque: 90, defensa: 55, spAtaque: 90, spDefensa: 80, velocidad: 110 },
            habilidades: ['Electricidad Estática', 'Pararrayos']
        },
        {
            nombre: 'Sandshrew',
            tipo: 'Tierra',
            descripcion: 'Su cuerpo recubierto de placas resistentes le protege de peligros.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
            estadisticas: { hp: 50, ataque: 75, defensa: 85, spAtaque: 20, spDefensa: 30, velocidad: 40 },
            habilidades: ['Fuga', 'Robustez']
        },
        {
            nombre: 'Sandslash',
            tipo: 'Tierra',
            descripcion: 'Afila sus garras para excavar y atacar con gran precisión.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
            estadisticas: { hp: 75, ataque: 100, defensa: 110, spAtaque: 45, spDefensa: 55, velocidad: 65 },
            habilidades: ['Fuga', 'Robustez']
        },
        {
            nombre: 'Nidoran♀',
            tipo: 'Veneno',
            descripcion: 'A pesar de su apariencia tierna, su aguijón es muy venenoso.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
            estadisticas: { hp: 55, ataque: 47, defensa: 52, spAtaque: 40, spDefensa: 40, velocidad: 41 },
            habilidades: ['Punto Toxicógeno', 'Rivalidad']
        },
        {
            nombre: 'Nidorina',
            tipo: 'Veneno',
            descripcion: 'Más grande que Nidoran♀, protege a su familia con ferocidad.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
            estadisticas: { hp: 70, ataque: 62, defensa: 67, spAtaque: 55, spDefensa: 55, velocidad: 56 },
            habilidades: ['Punto Toxicógeno', 'Rivalidad']
        },
        {
            nombre: 'Nidoqueen',
            tipo: 'Veneno',
            descripcion: 'Su piel dura como cuero la convierte en una excelente defensora.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
            estadisticas: { hp: 90, ataque: 92, defensa: 87, spAtaque: 75, spDefensa: 85, velocidad: 76 },
            habilidades: ['Punto Toxicógeno', 'Custodio']
        },
        {
            nombre: 'Nidoran♂',
            tipo: 'Veneno',
            descripcion: 'Pequeñas púas tóxicas cubren su cuerpo y sirven de defensa.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
            estadisticas: { hp: 46, ataque: 57, defensa: 40, spAtaque: 40, spDefensa: 40, velocidad: 50 },
            habilidades: ['Punto Toxicógeno', 'Rivalidad']
        },
        {
            nombre: 'Nidorino',
            tipo: 'Veneno',
            descripcion: 'Su cuerno libera toxinas más potentes y es territorial.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
            estadisticas: { hp: 61, ataque: 72, defensa: 57, spAtaque: 55, spDefensa: 55, velocidad: 65 },
            habilidades: ['Punto Toxicógeno', 'Rivalidad']
        },
        {
            nombre: 'Nidoking',
            tipo: 'Veneno',
            descripcion: 'Con gran fuerza y tamaño, domina el paisaje que habita.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
            estadisticas: { hp: 81, ataque: 102, defensa: 77, spAtaque: 85, spDefensa: 75, velocidad: 85 },
            habilidades: ['Punto Toxicógeno', 'Custodio']
        },
        {
            nombre: 'Clefairy',
            tipo: 'Hada',
            descripcion: 'Atrae con su danza y brinca bajo la luz de la luna.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
            estadisticas: { hp: 70, ataque: 45, defensa: 48, spAtaque: 60, spDefensa: 65, velocidad: 35 },
            habilidades: ['Gran Encanto', 'Piel Feérica']
        },
        {
            nombre: 'Clefable',
            tipo: 'Hada',
            descripcion: 'Capaz de levitar y crear breves ondas de energía.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
            estadisticas: { hp: 95, ataque: 70, defensa: 73, spAtaque: 95, spDefensa: 90, velocidad: 60 },
            habilidades: ['Gran Encanto', 'Piel Feérica']
        },
        {
            nombre: 'Vulpix',
            tipo: 'Fuego',
            descripcion: 'Sus colas crecen con la edad y emiten un calor acogedor.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
            estadisticas: { hp: 38, ataque: 41, defensa: 40, spAtaque: 50, spDefensa: 65, velocidad: 65 },
            habilidades: ['Absorbe Fuego', 'Cuerpo Llama']
        },
        {
            nombre: 'Ninetales',
            tipo: 'Fuego',
            descripcion: 'Dicen que vive hasta 1,000 años y su pelaje es muy apreciado.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
            estadisticas: { hp: 73, ataque: 76, defensa: 75, spAtaque: 81, spDefensa: 100, velocidad: 100 },
            habilidades: ['Absorbe Fuego', 'Cuerpo Llama']
        },
        {
            nombre: 'Jigglypuff',
            tipo: 'Hada',
            descripcion: 'Canta melodías suaves para hacer dormir profundamente a otros.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
            estadisticas: { hp: 115, ataque: 45, defensa: 20, spAtaque: 45, spDefensa: 25, velocidad: 20 },
            habilidades: ['Gran Encanto', 'Aromaterapia']
        },
        {
            nombre: 'Wigglytuff',
            tipo: 'Hada',
            descripcion: 'Con su piel elástica, puede inflarse para protegerse de ataques.',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
            estadisticas: { hp: 140, ataque: 70, defensa: 45, spAtaque: 85, spDefensa: 50, velocidad: 45 },
            habilidades: ['Gran Encanto', 'Maleable']
        }
    ];

      

    return (
        
        <div className='principalA'>
            
            <Agua pokemones={pokemons} />
            <Home pokemones={pokemons} />

        </div>
    );
}

export default Principalarray