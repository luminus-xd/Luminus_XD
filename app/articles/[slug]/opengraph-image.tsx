/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server';
// import { getDetail } from '@/libs/microcms';

export const runtime = 'edge';

export const alt = 'Dummy';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundImage: 'linear-gradient(135deg, #7dc7f8 10%, #027cd9 100%)',
          color: '#f3f3f3',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem 4rem 2.5rem',
            backgroundColor: '#181b29',
            justifyContent: 'space-between',
            borderRadius: '16px',
            width: '100%',
            height: '90%',
            boxShadow: '0 0 16px rgba(0, 0, 0, 0.5)',
          }}
        >
          <p style={{ fontSize: 60, fontWeight: 700 }}>Dummy</p>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://images.microcms-assets.io/assets/086f9d42ce494f47b9788ee7f77e85e1/ac30978ee5d34194a0c3282a1c925fde/luminus.png?&fit=crop&w=110&h=110&dpr=2"
              alt=""
              width={110}
              height={110}
              style={{
                padding: '1rem',
                border: '1px solid #333545',
                borderRadius: '100%',
              }}
              decoding="auto"
            />
            <p style={{ fontSize: 40, fontWeight: 500, marginLeft: 16 }}>Luminus</p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
