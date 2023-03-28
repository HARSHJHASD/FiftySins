import { AQUAMARINE, WHITE_MARBLE } from '../../core/constants/colors';
import { CheckboxProps } from './ui-components-types';

/**
 * This function is used as the Checkbox component on the web app.
 *
 * @version 0.2.0
 * @author Aayush Goyal
 * @created 2023-03-06
 * @modifier Aayush Goyal
 * @modified 2023-03-06
 * @since 0.5.0
 */
function Checkbox(props: CheckboxProps) {
    return (
        <>
            <div className={`container-checkbox ${props.className}`}>
                {props.options.map((option) => (
                        <div key={option.id} className="container-checkbox-item">
                            <div className='checkbox-container'>
                                <input
                                    type="checkbox"
                                    id={`checkbox-item-${option.id}`}
                                    checked={true} />
                                <span id="tick"></span>
                            </div>
                            <label htmlFor={`checkbox-item-${option.id}`} >{option.item}</label>
                        </div>
                    ))
                }
             </div>
             
            <style jsx>
                {
                `
                #tick{
                    top: 32.4rem;
                    width: 11px;
                    height: 11px;
                    margin-right: 4px;
                    right: 25.2rem;
                    visibility:"hidden";
                }
                .container-checkbox {
                    width:100px;
                    padding:20px;
                    font-size:5px
                }
                .container-checkbox-item {
                    display:flex;
                    margin-left:-45px;
                    // margin: 1rem 0 1rem;
                }
                checkbox-container{
                    position:relative;
                    margin: 1rem 1rem 1rem;
                    width:100px;
                    height:100px;
                    visibility:hidden;
                }
                .checkbox-container span{
                    width: 7px;
                    height: 7px;
                    display:block;
                    position:absolute;
                    border: 2px solid ${AQUAMARINE.S600};
                    border-radius: 1.5px;
                }
                .checkbox-container span::after{
                    border-radius: 1.5px;
                    position:absolute;
                    border: 2px solid ${AQUAMARINE.S600};
                    border-width:0 2px 2px 0;
                    border-radius: 1.5px;
                    transform:rotate(45deg)
                    opacity:0;
                    transition:width 0.5s, height 0.5s, opacity 0.5s;
                }
                input:checked ~ span::after{
                    opacity: 1;
                    position: absolute;
                    left: 4px;
                    bottom: 2px;
                    width: 2px;
                    height: 7px;
                    transform: rotate(45deg);
                    z-index: 123;
                    border-radius: 1.5px;
                }
                label{
                    margin: 0.1rem 0.8rem 0;
                    width: 1.5rem;
                }
                input {
                    background-color: ${WHITE_MARBLE.LIGHT};
                    margin: 0;
                    position:absolute;
                    cursor:pointer;
                    opacity:0;
                    
            }
        `
                } </style>
        </>
    );
}
export default Checkbox;
