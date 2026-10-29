import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#E84A27',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '6px', // Lengkungan pinggir yang pas untuk ukuran kecil
          fontWeight: 900,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '-1px', // Merapatkan jarak antar huruf RR
        }}
      >
        RR
      </div>
    ),
    {
      ...size,
    }
  )
}