import React, { Component } from 'react';
import { View, asset, NativeModules } from 'react-360';
import Entity from 'Entity';
import Picture from '../Picture';

const { KeyboardMovementModule } = NativeModules;
// const { AudioModule } = NativeModules;

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      z: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => this.callCheck(), 1000);

    // Uncomment to work
    // AudioModule.playEnvironmental({
    // source: asset('environmental.mp3'),
    // volume: 0.5
    // })
  }

  callCheck() {
    KeyboardMovementModule.getValueWithCallback((x, z) =>
      this.setState({ x, z })
    );
    setTimeout(() => this.callCheck(), 50);
  }

  render() {
    return (
      <View>
        <Entity
          style={{
            transform: [
              { scale: 1 },
              { translate: [this.state.x, 0, this.state.z] },
            ],
          }}
          source={{
            gltf2: asset('scene.gltf'),
          }}
        />

        <Picture
          x={2.57 + this.state.x}
          y={1.4}
          z={-11.4 + this.state.z}
          height={1.4}
          width={1.4}
          rotateY={-90}
          asset="mona-lisa.jpg"
          title="Mona Lisa"
          question="What is this painting called?"
          answers={['Mona Lisa', 'The Last Supper', 'Guernica']}
          correctAnswer={0}
          artist="Leonardo da Vinci"
          date="1503 to 1519"
          location="Louvre Museum (Paris)"
        />

        <Picture
          x={2.57 + this.state.x}
          y={2.8}
          z={-8.2 + this.state.z}
          height={1.4}
          width={1.4}
          rotateY={-90}
          asset="last-supper.jpg"
          title="The Last Supper"
          question="When was the painting created?"
          answers={['14th century', '15th century', '16th century']}
          correctAnswer={1}
          artist="Leonardo da Vinci"
          date="1495 to 1498"
          location="Santa Maria (Milan, Italy)"
        />

        <Picture
          x={2.41 + this.state.x}
          y={4.78}
          z={-4.64 + this.state.z}
          height={2.5}
          width={1.7}
          rotateY={-90}
          asset="scream.jpg"
          title="The Scream"
          question="Who painted the Scream?"
          answers={['Edvard Munch', 'Pablo Picasso', 'Johannes Vermeer']}
          correctAnswer={0}
          artist="Edvard Munch"
          date="1893"
          location="National Museum(Oslo, Norway)"
        />

        <Picture
          x={2.35 + this.state.x}
          y={6.9}
          z={-0.64 + this.state.z}
          height={1.8}
          width={1.8}
          rotateY={-90}
          asset="starry-night.jpg"
          title="The Starry Night"
          question="When was the Starry Night painted?"
          answers={['1689', '1789', '1889']}
          correctAnswer={2}
          artist="Vincent van Gogh"
          date="1889"
          location="Museum of Modern Art (New York City)"
        />
        <Picture
          x={2.35 + this.state.x}
          y={8.72}
          z={2.94 + this.state.z}
          height={1.8}
          width={1.8}
          rotateY={-90}
          asset="guernica.jpg"
          title="Guernica"
          question="Who painted Guernica?"
          answers={['Pablo Picaso', 'Leonardo da Vinci', 'Rembrandt']}
          correctAnswer={0}
          artist="Pablo Picaso"
          date="1937"
          location="Museo Reina Sofia (Madrid)"
        />

        <Picture
          x={-3.93 + this.state.x}
          y={10.62}
          z={3.98 + this.state.z}
          height={1.72}
          width={1.34}
          rotateY={90}
          asset="kiss.jpg"
          title="The Kiss"
          question="What is the name of the painting?"
          answers={['Belvedere', 'The Kiss', 'Girl with a Pearl Earring']}
          correctAnswer={1}
          artist="Gustav Klimt"
          date="1907 to 1908"
          location="Upper Belvedere Museum (Vienna, Austria)"
        />

        <Picture
          x={-3.93 + this.state.x}
          y={12.34}
          z={1.8 + this.state.z}
          height={1.72}
          width={1.34}
          rotateY={90}
          asset="girl-pearl.jpg"
          title="Girl with a Pearl Earring"
          question="Where can you see this painting"
          answers={['Oslo', 'NYC', 'The Hague']}
          correctAnswer={2}
          artist="Johannes Vermeer"
          date="1665"
          location="Mauritschuis (The Hague, Netherlands)"
        />

        <Picture
          x={-3.93 + this.state.x}
          y={14.05}
          z={-2.99 + this.state.z}
          height={1.7}
          width={1.34}
          rotateY={90}
          asset="meninas.jpg"
          title="Las Meninas"
          question="Who painted Las Meninas"
          answers={['Pablo Picaso', 'Diego Velazquez', 'Miguel Sanchez']}
          correctAnswer={1}
          artist="Diego Velazquez"
          date="1656"
          location="Museo del Prado (Madrid)"
        />

        <Picture
          x={-3.93 + this.state.x}
          y={15.76}
          z={-4.64 + this.state.z}
          height={1.7}
          width={1.34}
          rotateY={90}
          asset="venus.jpg"
          title="The Birth of Venus"
          question="Which Roman goddess is represented on this painting?"
          answers={['Caelestis', 'Bonus', 'Venus']}
          correctAnswer={2}
          artist="Sandro Botticelli"
          date="1485"
          location="Le Gallerie Degli Uffizi (Florence, Italy)"
        />

        <Picture
          x={-3.93 + this.state.x}
          y={17.46}
          z={-6.37 + this.state.z}
          height={1.7}
          width={1.34}
          rotateY={90}
          asset="adam.jpg"
          title="The Creation of Adam"
          question="Who is 'created' on this painting?"
          answers={['Caleb', 'Adam', 'Juda']}
          correctAnswer={1}
          artist="Michelangelo"
          date="1508 to 1512"
          location="Sistine Chapel (Vatican City)"
        />

        <Picture
          x={-4.8 + this.state.x}
          y={19.15}
          z={-12.38 + this.state.z}
          height={1.7}
          width={3.08}
          rotateY={90}
          asset="night-watch.jpg"
          title="The Night Watch"
          question="Who painted this painting?"
          answers={['Rembrandt', 'Pablo Picasso', 'Michelangelo']}
          correctAnswer={0}
          artist="Rembrandt"
          date="1642"
          location="Amsterdam"
        />

        <Picture
          x={-5.25 + this.state.x}
          y={20.85}
          z={-12.38 + this.state.z}
          height={1.7}
          width={3.08}
          rotateY={-90}
          asset="memoria.jpg"
          title="La persistencia de la memoria"
          question="In which century was this painted?"
          answers={['12th century', '19th century', '20th century']}
          correctAnswer={0}
          artist="Salvador Dali"
          date="1931"
          location="Museum of Modern Art (NYC)"
        />

        <Picture
          x={-4.2 + this.state.x}
          y={22.34}
          z={-6.38 + this.state.z}
          height={1.3}
          width={1}
          rotateY={-90}
          asset="mother.jpg"
          title="Whistler's Mother"
          question="Whose mother is this?"
          answers={["Whistler's", "Breather's", "Walker's"]}
          correctAnswer={0}
          artist="James McNeill Whistler"
          date="1871"
          location="Orsay Museum (Paris, France)"
        />

        <Picture
          x={-4.2 + this.state.x}
          y={23.64}
          z={-2.97 + this.state.z}
          height={1.3}
          width={1}
          rotateY={-90}
          asset="arnolfini.jpg"
          title="Arnolfini Portrait"
          question="What family is this?"
          answers={['Accetta', 'Abruzzo', 'Arnolfini']}
          correctAnswer={2}
          artist="Jan van Eyck"
          date="1434"
          location="National Gallery (London)"
        />

        <Picture
          x={-4.41 + this.state.x}
          y={25.22}
          z={-4.66 + this.state.z}
          height={1.8}
          width={1.4}
          rotateY={-90}
          asset="delight-garden.jpg"
          title="The Garden of Earthly Delights"
          question="What type of garden is this?"
          answers={[
            'Garden of Wishes',
            'Garden of Delights',
            'Garden of Dreams',
          ]}
          correctAnswer={1}
          artist="Hieronumus Bosch"
          date="1490 to 1510"
          location="Museo del Prado (Madrid)"
        />

        <Picture
          x={-4.41 + this.state.x}
          y={27}
          z={1.8 + this.state.z}
          height={1.8}
          width={1.4}
          rotateY={-90}
          asset="ermine.jpg"
          title="Lady with an Ermine"
          question="When was this painted?"
          answers={['10th century', '11th century', '15th century']}
          correctAnswer={2}
          artist="Leonardo da Vinci"
          date="1489 to 1490"
          location="Czartoryski Museum (Krakow, Poland)"
        />

        <Picture
          x={-4.41 + this.state.x}
          y={28.8}
          z={3.97 + this.state.z}
          height={1.8}
          width={1.4}
          rotateY={-90}
          asset="galette-dance.jpg"
          title="Bal du moulin de la Galette"
          question="Where is happening this bal?"
          answers={['Paris', 'Galette', 'Nice']}
          correctAnswer={1}
          artist="Pierre Auguste Renoir"
          date="1876"
          location="Orsay Museum (Paris)"
        />

        <Picture
          x={-10.61 + this.state.x}
          y={30.26}
          z={2.64 + this.state.z}
          height={1.4}
          width={1.4}
          rotateY={90}
          asset="ladies.jpg"
          title="Les Demoiselles d'Avignon"
          question="When was this painted?"
          answers={['1906', '1907', '1908']}
          correctAnswer={1}
          artist="Pablo Picaso"
          date="1907"
          location="Museum of Modern Art (NYC)"
        />

        <Picture
          x={-10.61 + this.state.x}
          y={31.66}
          z={-0.58 + this.state.z}
          height={1.4}
          width={1.4}
          rotateY={90}
          asset="primavera.jpg"
          title="Primavera (Spring)"
          question="Who painted this?"
          answers={['Michelangelo', 'Picaso', 'Botticelli']}
          correctAnswer={2}
          artist="Boticelli"
          date="1470 to 1480"
          location="Uffizi Gallery (Florence)"
        />

        <Picture
          x={-10.75 + this.state.x}
          y={33.66}
          z={-4.13 + this.state.z}
          height={2.6}
          width={1.7}
          rotateY={90}
          asset="athens-school.jpg"
          title="The School of Athens"
          question="Where is this school?"
          answers={['Athens', 'Patras', 'Thessaloniki']}
          correctAnswer={0}
          artist="Raphael"
          date="1509 to 1511"
          location="Apostolic Palace, Vatican City"
        />

        <Picture
          x={-10.79 + this.state.x}
          y={35.86}
          z={-8.14 + this.state.z}
          height={1.8}
          width={1.8}
          rotateY={90}
          asset="wanderer.jpg"
          title="Wanderer above the Sea of Fog"
          question="Where can you see this picture?"
          answers={['The Great Britain', 'Spain', 'Germany']}
          correctAnswer={2}
          artist="Caspar David Friedrich"
          date="1818"
          location="Kunsthalle Hambur, Hamburg"
        />

        <Picture
          x={-10.79 + this.state.x}
          y={37.66}
          z={-11.72 + this.state.z}
          height={1.8}
          width={1.8}
          rotateY={90}
          asset="sleeping-gypsy.jpg"
          title="The Sleeping Gypsy"
          question="When was this painted?"
          answers={['18th century', '19th century', '20th century']}
          correctAnswer={1}
          artist="Henri Rousseau"
          date="1897"
          location="Museum od Modern Art (NYC)"
        />
      </View>
    );
  }
}
