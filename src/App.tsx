/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import InputColor from './components/inputColor/inputColor'
import InputForm from './components/inputForm/inputForm'
import QrCode from 'react-qr-code'

const App:React.FC = () => {

  const [inputVal,setInputVal] = React.useState({
    url:'',
    color:""
  })
  const [respone,setRes] = React.useState<any>()

  const handleChange = (e:React.ChangeEvent) => {
    const { value,name } = e.target as any
    setInputVal({
      ...inputVal,
      [name]:value
    })
  }

  const handleColor = (val:any) => {
    setInputVal({
      ...inputVal,
      color:val
    })
  }

  const handleQr = () => {
    inputVal.url && inputVal.color && setRes(true)
  }

   
    
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-lime-700 h-screen pt-24 px-2">
        <div className="container mx-auto rounded-md shadow-current max-w-4xl bg-white">
            <div className="row-span-full flex justify-between gap-2">
              <div className="col-span-full md:col-span-8 px-3 py-5">
                  <InputForm name={"url"} value={inputVal.url} onChange={handleChange} />
                  <InputColor name={"color"} value={inputVal.color} onChange={handleColor} />
                  <button 
                    onClick={handleQr}
                    disabled={!inputVal.url}
                    className='bg-lime-700 text-white ml-auto rounded-md max-w-xs py-2 px-4 
                    mt-2 hover:bg-lime-600 disabled:bg-gray-400'>
                      Genrate QrCode
                  </button>
              </div>
              <div className="col-span-12 md:col-span-4 px-3 py-5">
                  <div className="flex flex-col items-center bg-gray-100 rounded-r-md w-40 h-32 justify-center">
                      
                      {
                        respone ? (
                          <div>
                            <QrCode
                                title="qrcode"
                                value={inputVal.url}
                                fgColor={inputVal.color}
                                className="w-auto h-auto"
                                size={110}
                              />
                        </div>

                        ): null
                      }
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default App
