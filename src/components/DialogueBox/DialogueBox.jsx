import React from 'react'

const DialogueBox = ({ show, title, message, confirmCancel, confirmLogout }) => {
  
  if (!show) {
    return null
  }

  return (
    <section className='w-screen h-screen fixed inset-0 z-40'>
          <main className="antialiased bg-black bg-opacity-10 overflow-x-hidden">
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-8 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <div className="md:flex items-center">
            <div className="rounded-full bg-primary flex items-center justify-center p-4  w-20 h-20 flex-shrink-0 mx-auto">
                <span className='w-16 text-white'>
                  <svg fill='currentColor' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512.003 512.003"  xmlSpace="preserve">
                                <g>
                                  <g>
                                    <g>
                                      <path d="M96.003,106.668c29.419,0,53.333-23.936,53.333-53.333S125.422,0.002,96.003,0.002
                                        c-29.419,0-53.333,23.936-53.333,53.333S66.585,106.668,96.003,106.668z M96.003,21.335c17.643,0,32,14.357,32,32
                                        c0,17.643-14.357,32-32,32c-17.643,0-32-14.357-32-32C64.003,35.692,78.361,21.335,96.003,21.335z"/>
                                      <path d="M177.646,179.82c-3.349-29.547-26.752-51.819-54.4-51.819H68.782c-27.648,0-51.051,22.272-54.4,51.819L0.238,303.724
                                        c-1.173,10.368,2.027,20.672,8.768,28.224c5.803,6.507,13.525,10.304,21.909,10.773l11.776,159.403
                                        c0.427,5.568,5.056,9.877,10.645,9.877h85.333c5.589,0,10.219-4.309,10.667-9.877l11.776-159.403
                                        c8.363-0.469,16.107-4.245,21.909-10.773c6.741-7.573,9.941-17.856,8.768-28.224L177.646,179.82z M167.086,317.74
                                        c-1.216,1.365-3.883,3.691-7.808,3.691h-8.107c-5.589,0-10.219,4.309-10.645,9.877l-11.776,159.36H63.257l-11.797-159.36
                                        c-0.427-5.568-5.056-9.877-10.645-9.877h-8.107c-3.904,0-6.571-2.325-7.808-3.691c-2.709-3.051-3.968-7.275-3.477-11.605
                                        l14.144-123.904c2.133-18.752,16.405-32.896,33.195-32.896h54.464c16.789,0,31.061,14.144,33.195,32.896l14.144,123.904
                                        C171.076,310.466,169.795,314.69,167.086,317.74z"/>
                                      <path d="M352.003,234.668c-5.888,0-10.667,4.779-10.667,10.667v42.667c0,5.888,4.779,10.667,10.667,10.667
                                        c5.888,0,10.667-4.779,10.667-10.667v-42.667C362.67,239.447,357.891,234.668,352.003,234.668z"/>
                                      <path d="M465.945,0.002H245.337c-17.643,0-32,14.357-32,32v384c0,17.643,14.357,32,32,32h53.333v17.941
                                        c0,25.387,20.672,46.059,46.059,46.059c6.293,0,12.395-1.259,18.155-3.712l121.195-51.947
                                        c16.96-7.275,27.925-23.893,27.925-42.347V46.06C512.003,20.674,491.331,0.002,465.945,0.002z M298.67,98.007v328.661h-53.333
                                        c-5.867,0-10.667-4.779-10.667-10.667v-384c0-5.888,4.8-10.667,10.667-10.667h161.344L326.595,55.66
                                        C309.635,62.935,298.67,79.554,298.67,98.007z M490.67,413.996c0,9.899-5.888,18.837-14.997,22.72l-121.195,51.947
                                        c-3.072,1.323-6.379,2.005-9.749,2.005c-13.632,0-24.725-11.093-24.725-24.725V98.007c0-9.899,5.888-18.837,14.997-22.72
                                        L456.195,23.34c3.072-1.323,6.379-2.005,9.749-2.005c13.632,0,24.725,11.093,24.725,24.725V413.996z"/>
                                    </g>
                                  </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                  </svg>
              </span>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="font-extrabold text-lg">{title}</p>
              <p className="text-md text-secondary mt-1">{message}
              </p>
            </div>
          </div>
          <div className="text-center md:text-right mt-8 md:flex md:justify-end">
            <button onClick={confirmLogout} className="block w-full md:inline-block md:w-auto px-8 py-3 md:py-2 bg-primary text-white rounded-sm font-semibold text-sm md:ml-6 md:order-2">Logout</button>
            <button onClick={confirmCancel} className="block w-full md:inline-block md:w-auto px-8 py-3 md:py-2 border border-primary text-primary rounded-sm font-semibold text-sm mt-4
              md:mt-0 md:order-1">Cancel</button>
          </div>
        </div>
      </div>
</main>
    </section>
  )
}

export default DialogueBox