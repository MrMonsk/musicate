//whenever one wants to add a score
import React from 'react'
import ReactDOM from 'react-dom'

const Score = React.createClass({
  componentDidMount() {
    console.log(this.refs.score, VexTab)
    const Renderer = Vex.Flow.Renderer
    const renderer = new Renderer(this.refs.score, Renderer.Backends.CANVAS)
    
    var ctx = renderer.getContext();
    var stave = new Vex.Flow.Stave(10, 0, 500);
    stave.addClef("treble").setContext(ctx).draw();
    
      // Create the notes
      var notes = [
        // A quarter-note C.
        new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),
    
        // A quarter-note D.
        new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),
    
        // A quarter-note rest. Note that the key (b/4) specifies the vertical
        // position of the rest.
        new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),
    
        // A C-Major chord in second inversion.
        new Vex.Flow.StaveNote({
            keys: ["g/4", "c/5", "e/5"],
            duration: "q",
            stem_direction: -1
        })
      ];
    
      // Create a voice in 4/4
      var voice = new Vex.Flow.Voice({
        num_beats: 4,
        beat_value: 4,
        resolution: Vex.Flow.RESOLUTION
      });
    
      // Add notes to voice
      voice.addTickables(notes);
    
      // Format and justify the notes to 500 pixels
      var formatter = new Vex.Flow.Formatter().
        joinVoices([voice]).format([voice], 500);
    
      // Render voice
      voice.draw(ctx, stave);
            
  },
  render() {
    return (
      <div>
        <canvas ref='score' width='500' />
      </div>
    ) 
  }
})

export default Score