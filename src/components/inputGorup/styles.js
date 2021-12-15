import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${props => props.css}
`