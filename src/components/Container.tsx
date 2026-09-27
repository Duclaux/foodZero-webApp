
function Container({style, children}: { style: string, children: any}) {
  return (
    <div className={`${style} w-full mx-auto max-w-87.5 sm:max-w-125 md:max-w-175 lg:max-w-[950px]: xl:max-w-300 2xl:max-w-370 3xl:max-w-400`}>
      {children}
    </div>
  )
}

export default Container
