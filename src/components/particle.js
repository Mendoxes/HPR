import React, { Component } from 'react'

import ParticleEffectButton from 'react-particle-effect-button'

export class Particle extends Component {

    
    state = {
        hidden: false,
        animating: false
      }
    
      render() {
        const {
          background,
          text,
          buttonStyles,
          buttonOptions
        } = this.props
    
        const {
          hidden,
          animating
        } = this.state
    
        return (
          <div
            className="buttons-div-container"
            style={{ background }}
          >
            {hidden && !animating && (
              <button
                className="animation-reset-button"
                onClick={this._onToggle}
                onMouseEnter={this._onToggle}
              >
                 <p className="mainText"><span className="moveMe2">H</span><span className="moveMe3">P</span><span className="moveMe">R</span></p>
              </button>
              
            )}
    
            <ParticleEffectButton
              hidden={hidden}
              onComplete={this._onAnimationComplete}
              {...buttonOptions}
            >
              <button
                className="particle-effect-button"
                style={{ ...buttonStyles }}
                onClick={this._onToggle}
                
              >
                 <p className="mainText"><span className="moveMe2">H</span><span className="moveMe3">P</span><span className="moveMe">R</span></p>
              </button>
            </ParticleEffectButton>
          </div>
        )
      }
    
      _onToggle = () => {
        if (this.state.animating) return
    
        this.setState({
          hidden: !this.state.hidden,
          animating: true
        })
      }
    
      _onAnimationComplete = () => {
        this.setState({
          animating: false
        })
      }
    }

export default Particle;
