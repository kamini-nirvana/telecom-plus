import type { Comparison } from "@/data/business-communications";

type ComparisonTableProps = {
  comparison: Comparison;
  className?: string;
};

export function ComparisonTable({
  comparison,
  className = "",
}: ComparisonTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full min-w-[720px] table-fixed text-left">
        <colgroup>
          <col className="w-1/4" />
          <col className="w-[37.5%]" />
          <col />
        </colgroup>
        <thead className="bg-tint text-body">
          <tr>
            {comparison.columns.map((column) => (
              <th key={column} scope="col" className="p-5 font-normal">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="align-top">
          {comparison.rows.map((row) => (
            <tr
              key={row.label}
              className="border-t border-ink/10 transition-colors duration-300 hover:bg-tint/60"
            >
              <th
                scope="row"
                className="p-5 text-body font-normal text-brand-ink"
              >
                {row.label}
              </th>
              {row.values.map((value) => (
                <td key={value} className="p-5 pr-10 text-body text-ink/60">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
