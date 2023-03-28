import img from "../../public/icons/password-toggle-on.svg";
import Image from "next/image";

/**
 * This function is used as the Body component.
 *
 * @version 0.1.0
 * @author Kartik Chauhan
 * @created 2023-03-24
 * @modifier
 * @modified
 * @since 0.3.0
 */
function Toggle( ) {

    return (
        <div >
            <Image
                src = {img}
                alt = "#"
                
            />
            <style jsx>
                {`
                    div {
                        position: absolute;
                        right:0;
                        height:100%;
                        width:10%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                `}
            </style>
        </div>
    );
}

export default Toggle;
