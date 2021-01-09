import React from "react"
import styled from "styled-components"
import ReactPaginate from "react-paginate"
import { PAGE_LIMIT } from "../constants"

const Paginate = ({ totalResults, onPageChange, curPage }) => {

    const totalPages = Math.floor(totalResults/PAGE_LIMIT)

    return (
        <>
            {totalPages > 0 && (
                <PaginateWrapper>
                    <ReactPaginate
                        pageCount={totalResults/PAGE_LIMIT}
                        onPageChange={onPageChange}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        initialPage={curPage}
                    />
                </PaginateWrapper>
            )}
        </>
    )
}

const PaginateWrapper = styled.div`
    position: sticky;
    top: 70px;
    width: 100%;
    ul {
        list-style: none;
        margin: 0 auto;
        padding: 5px 0;
        text-align: center;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        li {
            display: inline-block;
            padding: 3px;
            min-width: 21px;            
            &.selected {
                border: 1px solid #fff;
                border-radius: 50%;
            }            
            &.disabled {
                color: #aaa;
                cursor: none;
            }
            &:hover {
                cursor: pointer;
            }
            a:focus {
                outline: none;
            }
        }
    }    
`

export default Paginate