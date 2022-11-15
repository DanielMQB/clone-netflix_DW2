import styled from 'styled-components'

export const PageArea = styled.div`
    form {
        margin-top: 30px;
        background-color: #FFF;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0px 0px 3px #8D8D8D;
        margin-bottom: 20px;

        .area {
            display: flex;
            align-items: center;
            padding: 10px;
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

                input {
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #DDD;
                    border-radius: 3px;
                    outline: none;

                    &:focus {
                        border: 1px solid #1C1C1C;
                        color: #1C1C1C;
                    }
                }

                button {
                    &:hover {
                        background-color: #0066C0;
                    }

                    background-color: #087DE4;
                    color: #FFF;
                    font-size: 15px;
                    border: 0;
                    outline: 0;
                    padding: 8px 5px;
                    border-radius: 4px;
                    cursor: pointer;

                    
                }
            }
        }
    }

    .anuncios {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
    }

    .anuncio-card {
        background-color: #FFF;
        border-radius: 4px;
        padding: 15px;
        box-shadow: 0px 0px 3px #999999;
        max-width: 350px;
        margin-bottom: 20px;
        
    }

    .anuncio-area {
        .anuncio-area-titulo {
            padding-right: 15px;
            padding-left: 15px;
            text-align: right;
            font-weight: bold;
            font-size: 14px;
        }

        .anuncio-area-texto {
            padding-right: 15px;
            padding-left: 15px;
            text-align: right;
            font-size: 11px;
        }
    }
`  
