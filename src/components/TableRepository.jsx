import { ColgroupSellingTable } from "./ColgroupSellingTable";
import TableBodyData from "./TableBodyData";
import { TableHeadColumn } from "./TableHeadColumn";

const captionText = "Vendas por produto";

const scopeColumn = function (scope, name) {
    return {
        scope,
        name
    }
}

export function TableRepository() {
    return (
        <table className="table">
            <caption>{captionText}</caption>
            <ColgroupSellingTable />
            <thead>
                <tr>
                    <th rowSpan="2"></th>
                    <th colSpan="2" scope="colgroup">Alexandre</th>
                    <th colSpan="2" scope="colgroup">Sarah</th>
                </tr>
                <tr>
                    <TableHeadColumn scopeColumn={scopeColumn("col", "novos")} />
                    <TableHeadColumn scopeColumn={scopeColumn("col", "usados")} />
                    <TableHeadColumn scopeColumn={scopeColumn("col", "novos")} />
                    <TableHeadColumn scopeColumn={scopeColumn("col", "usados")} />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <TableHeadColumn scopeColumn={scopeColumn("row", "Livro")} />
                    <TableBodyData value="7" />
                    <TableBodyData value="4" />
                    <TableBodyData value="3" />
                    <TableBodyData value="5" />
                </tr>
                <tr>
                    <TableHeadColumn scopeColumn={scopeColumn("row", "Revista")} />
                    <TableBodyData value="4" />
                    <TableBodyData value="2" />
                    <TableBodyData value="9" />
                    <TableBodyData value="5" />
                </tr>
            </tbody>
        </table>
    )
}