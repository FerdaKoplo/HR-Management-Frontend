import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Pagination, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

export interface Column<T> {
    header: string
    accessor: keyof T
}

interface DataTableProps<T> {
    columns: Column<T>[]
    data: T[]
    page: number
    setPage: (page: number) => void
    totalPages: number
}

function DataTable<T extends { id: number | string }>({
    columns,
    data,
    page,
    setPage,
    totalPages,
}: DataTableProps<T>) {
    return (
        <div className="overflow-x-auto w-full">
            <Table className="w-full">
                <TableHeader className='bg-gradient-to-t !text-white from-blue-500  to-blue-400'>
                    <TableRow>
                        {columns.map((col) => (
                            <TableHead key={String(col.accessor)}>{col.header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            {columns.map((col) => (
                                <TableCell key={String(col.accessor)}>
                                    {String(row[col.accessor])}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination className='flex items-center mt-10 gap-3'>
                <PaginationPrevious
                    className='cursor-pointer'
                    onClick={() => setPage(Math.max(1, page - 1))}
                />
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        className={`px-3 py-1 rounded-md border ${num === page ? 'bg-blue-400 text-white' : 'bg-white text-black'
                            }`}
                        onClick={() => setPage(num)}
                    >
                        {num}
                    </button>
                ))}
                <PaginationNext
                    className='cursor-pointer'
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                />
            </Pagination>
        </div>
    )
}

export default DataTable