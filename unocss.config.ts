import { defineConfig, presetUno, presetAttributify, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(), // ✅ bikin teks lebih halus
  ],
  shortcuts: {
    'post-card': 'bg-white text-black border-2 border-solid border-black rounded-lg p-6 shadow-sm space-y-2',
    'nav-link': 'text-gray-700 no-underline hover:text-blue-600 transition',
  },
  safelist: [
    'border', 'border-b', 'border-solid', 'border-black',
    'rounded-lg', 'shadow-sm',
    'font-sans', 'text-lg', 'text-gray-800',
    'text-xl', 'font-bold', 'text-sm', 'text-gray-500',
    'text-base', 'text-gray-700', 'hover:text-blue-600',
    'grid', 'gap-3', 'py-4', 'px-4', 'mx-auto', 'max-w-4xl',
  ],
  preflights: [
    {
      getCSS: () => `
        html {
          overflow-y: scroll;
        }
      
        table { 
          border-collapse: collapse; 
          width: 100%; 
          margin-bottom: 1rem; 
          font-size: 0.95rem; 
        }

        th, td { 
          border: 1px solid #ccc; 
          padding: 8px; 
          text-align: left; 
          vertical-align: top; 
        }

        th { 
          background-color: #f2f2f2; 
          font-weight: bold; 
        }

        tr:nth-child(even) { 
          background-color: #fafafa; 
        }

        .table-wrapper { 
          overflow-x: auto; 
          -webkit-overflow-scrolling: touch; 
        }
        blockquote { border-left: 4px solid #828282; padding-left: 12px; font-style: italic; }
        details { margin-bottom: 1rem; }
        summary { cursor: pointer; font-weight: bold; }
      `,
    },
  ]
})
