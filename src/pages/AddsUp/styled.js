import styled from 'styled-components'

export const PageArea = styled.div`
    form {
        background-color: #FFF;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 0px 3px #8D8D8D;
        margin-bottom: 20px;

        .area {
            display: flex;
            align-items: center;
            padding: 20px;
            max-width: 50%;

            .area--title {
                width: 200px;
                text-align: right;
                padding-right: 30px;
                font-weight: bold;
                font-size: 15px;
            }

            .area--input {
                flex: 1;

                input, select, textarea  {
                    font-size: 14px;
                    width: 100%;
                    padding: 3px;
                    transition: all ease 0.2s;
                    border: 1px solid #DDD;
                    outline: none;
                    border-radius: 5px;
                    

                    &:focus {
                        border: 1px solid #1C1C1C;
                        color: #1C1C1C;
                    }
                }

                textarea {
                    height: 200px;
                    resize: none;
                }

                button {
                    &:hover {
                        background-color: #0066C0;
                    }

                    background-color: #087DE4;
                    border-radius: 5px;
                    border: 0;
                    outline: 0;
                    cursor: pointer;
                    padding: 8px 5px;
                    font-size: 15px;
                    color: #FFF;                  
                }
                }
            }
        }
    }
`  
