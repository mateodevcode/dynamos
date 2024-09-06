export default function BotonComercio({bgColor, buttonText, textColor, borderColor, borderWidth, buttonIcon}) {

  return(
    <button className={`${bgColor} ${borderColor} ${borderWidth} ${textColor} px-8 pt-1 pb-1 my-2 rounded-full font-bold`}>
      {buttonText}  {buttonIcon}
    </button>
  );
};
