import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Visibility from '@mui/icons-material/Visibility'
import toast from 'react-hot-toast'

import { COLORS, data, icons, images, SIZES } from '../constants'
import { Button, CustomLottie, InputField } from '../components'
import { ReactSVG } from 'react-svg'

const Template = () => {
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
          <Button onClick={() => toast('Normal')}>Primary</Button>
          <Button onClick={() => toast.success('Well done!')} variant='secondary'>
            Secondary
          </Button>
          <Button onClick={() => toast.error('Nope!')} variant='tertiary'>
            Tertiary
          </Button>
          <Button
            onClick={() => {
              toast.loading('Loader...', { id: 'loader' })
              setTimeout(() => {
                toast.success('Done!', { id: 'loader' })
              }, 1500)
            }}
            variant='text'>
            Text
          </Button>
          <Button startIcon={<TrendingUpIcon />}>With icon</Button>
          <Button endIcon={<EqualizerIcon />}>With icon</Button>
          <Button mode='icon' variant='clean'>
            <AutoGraphIcon />
          </Button>
          <Button loading>Loading</Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <InputField label='Input' placeholder='I am a placeholder' />
          <InputField label='Error' error helperText='' placeholder='I am a placeholder' />
          <InputField variant='filled' label='With icon' startIcon={<AccountCircle />} />
          <InputField variant='standard' label='With icon' endIcon={<Visibility />} />
          <InputField
            mode='rounded'
            placeholder='Rounded custom'
            startIcon={
              <div className='custom-icon-container'>
                <img className='custom-icon' src={icons.close} />{' '}
              </div>
            }
          />
        </div>

        <CustomLottie animationData={data.animation1} />
      </div>
    </div>
  )
}

export default Template
