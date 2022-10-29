import React from 'react'

export default function ComponentDinamyc(props) {
    return (

        <div>
            <ComponentDinamyc {...props}>{props.children}</ComponentDinamyc>
        </div>
    )
}
