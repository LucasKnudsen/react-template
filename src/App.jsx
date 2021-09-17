import React from 'react'
import { COLORS, icons, SIZES } from './constants'
import { Button } from './components'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'

const App = () => {
  return (
    <div style={{ display: 'flex', padding: SIZES.padding, backgroundColor: COLORS.background }}>
      <div
        style={{
          width: '60%',
        }}>
        <h1>Main</h1>
        <div className='test' style={{ width: '100%', display: 'flex' }}>
          <div style={{ backgroundColor: COLORS.primary, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.faded, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.secondary, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.tertiary, height: 150, width: 150, margin: 8 }} />
        </div>
        <h1>Gray</h1>

        <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ backgroundColor: COLORS.gray, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.gray1, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.lightGray, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.lightGray2, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.lightGray3, height: 150, width: 150, margin: 8 }} />
        </div>
        <h1>Transparent</h1>

        <div style={{ width: '100%', display: 'flex' }}>
          <div
            style={{ backgroundColor: COLORS.transparentWhite, height: 150, width: 150, margin: 8 }}
          />
          <div
            style={{ backgroundColor: COLORS.transparentBlack, height: 150, width: 150, margin: 8 }}
          />
          <div
            style={{
              backgroundColor: COLORS.transparentBlack2,
              height: 150,
              width: 150,
              margin: 8,
            }}
          />
        </div>
        <h1>Default</h1>

        <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ backgroundColor: COLORS.white, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.dark, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.black, height: 150, width: 150, margin: 8 }} />
          <div style={{ backgroundColor: COLORS.error, height: 150, width: 150, margin: 8 }} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: COLORS.background,
          height: '100vh',
          width: '40%',
        }}>
        <h1 className='large'>Large title</h1>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <p>Body 1</p>
        <p className='p1'>Body 2</p>
        <p className='p2'>Body 3</p>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='tertiary'>Tertiary</Button>
          <Button variant='text'>Text</Button>
          <Button startIcon={<TrendingUpIcon />}>With icon</Button>
          <Button endIcon={<EqualizerIcon />}>With icon</Button>
          <Button variant='icon'>
            <AutoGraphIcon />
          </Button>
          <Button loading>Loading</Button>
        </div>
      </div>
    </div>
  )
}

export default App
