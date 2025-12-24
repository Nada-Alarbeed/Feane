const Title = ({ title, align = "center",color="text-black" }) => {
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  }[align] || "justify-center";

  return (
    <h2 className={`text-[2.5rem] flex items-center font-dancing font-bold   ${alignClass} ${color}`}>
      {title}
    </h2>
  )
}

export default Title