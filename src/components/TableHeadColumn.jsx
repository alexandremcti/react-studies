export function TableHeadColumn(props) {
    return (
        <th scope={props.scopeColumn.scope}>{props.scopeColumn.name}</th>
    )
}