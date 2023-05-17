import { colors } from "../../styles/theme";

const Button = ({children, onclick}) => {
  return (
    <>
      <button onClick={onclick}>{children}</button>
      <style jsx>{`
        button{
          display:flex;
          align-items: center;
          background: ${colors.black};
          border: 0;
          color: #fff;
          cursor: pointer;
          border-radius:9999px;
          font-size:16px;
          font-weight:400;
          padding: 8px 24px;
          transition: opacity .3s ease;
        }
        
        button>:global(svg){
          margin-right: 8px;
        }

        button:hover{
          opacity: .7;
        }
        `}</style>
    </>
  );
}
 
export default Button;