import * as React from 'react';
import * as hotFormulaParser from 'hot-formula-parser';
import { Parser } from 'hot-formula-parser';

/** A cell coordinates in the spreadsheet */
declare type Point = {
    /** The cell's column */
    column: number;
    /** The cell's row */
    row: number;
};

/** A two-dimensional array of given type T in rows and columns */
declare type Matrix<T> = Array<Array<T | undefined>>;
/**
 * Creates an empty matrix with given rows and columns
 * @param rows - integer, the amount of rows the matrix should have
 * @param columns - integer, the amount of columns the matrix should have
 * @returns an empty matrix with given rows and columns
 */
declare function createEmpty<T>(rows: number, columns: number): Matrix<T>;

/** The base type of cell data in Spreadsheet */
declare type CellBase<Value = any> = {
    /** Whether the cell should not be editable */
    readOnly?: boolean;
    /** Class to be given for the cell element */
    className?: string;
    /** The value of the cell */
    value: Value;
    /** Custom component to render when the cell is edited, if not defined would default to the component defined for the Spreadsheet */
    DataEditor?: DataEditorComponent<CellBase<Value>>;
    /** Custom component to render when the cell is viewed, if not defined would default to the component defined for the Spreadsheet */
    DataViewer?: DataViewerComponent<CellBase<Value>>;
};
/**
 * A cell with it's coordinates
 * @deprecated the component does not use cell descriptors anymore. Instead it passes cell point and cell value explicitly.
 */
declare type CellDescriptor<Cell> = {
    /** The cell's data */
    data: Cell | undefined;
} & Point;
/** The spreadsheet's write mode */
declare type Mode = "view" | "edit";
/** Dimensions of an element */
declare type Dimensions = {
    /** The element's width in pixels */
    width: number;
    /** The element's height in pixels */
    height: number;
    /** The distance of the element from it's container top border in pixels */
    top: number;
    /** The distance of the element from it's container left border in pixels */
    left: number;
};
/** Function for getting the cells the cell's value is bound to */
declare type GetBindingsForCell<Cell extends CellBase = CellBase> = (cell: Cell, data: Matrix<Cell>) => Point[];
declare type CellChange<Cell extends CellBase = CellBase> = {
    prevCell: Cell | null;
    nextCell: Cell | null;
};
/** Type of Spreadsheet Cell component props */
declare type CellComponentProps<Cell extends CellBase = CellBase> = {
    /** The row of the cell */
    row: number;
    /** The column of the cell */
    column: number;
    /** The DataViewer component to be used by the cell */
    DataViewer: DataViewerComponent<Cell>;
    /** The FormulaParser instance to be used by the cell */
    formulaParser: Parser;
    /** Whether the cell is selected */
    selected: boolean;
    /** Whether the cell is active */
    active: boolean;
    /** Whether the cell is copied */
    copied: boolean;
    /** Whether the user is dragging */
    dragging: boolean;
    /** The mode of the cell */
    mode: Mode;
    /** The data of the cell */
    data: Cell | undefined;
    /** Select the cell at the given point */
    select: (point: Point) => void;
    /** Activate the cell at the given point */
    activate: (point: Point) => void;
    /** Set the dimensions of the cell at the given point with the given dimensions */
    setCellDimensions: (point: Point, dimensions: Dimensions) => void;
    /**
     * Calculate which cells should be updated when given cell updates.
     * Defaults to: internal implementation which infers dependencies according to formulas.
     */
    getBindingsForCell: GetBindingsForCell<Cell>;
    /** Set data of the cell */
    setCellData: (cell: Cell) => void;
};
/** Type of the Spreadsheet Cell component */
declare type CellComponent<Cell extends CellBase = CellBase> = React.ComponentType<CellComponentProps<Cell>>;
declare type DataComponentProps<Cell extends CellBase> = {
    /** The rendered cell by the component */
    cell: Cell | undefined;
} & Point;
/** Type of the Spreadsheet DataViewer component props */
declare type DataViewerProps<Cell extends CellBase = CellBase> = DataComponentProps<Cell> & {
    /** Instance of `FormulaParser` */
    formulaParser: Parser;
    /** Set data of the cell */
    setCellData: (cell: Cell) => void;
};
/** Type of the Spreadsheet DataViewer component */
declare type DataViewerComponent<Cell extends CellBase = CellBase> = React.ComponentType<DataViewerProps<Cell>>;
/** Type of the Spreadsheet DataEditor component props */
declare type DataEditorProps<Cell extends CellBase = CellBase> = DataComponentProps<Cell> & {
    /** Callback to be called when the cell's value is changed */
    onChange: (cell: Cell) => void;
    /** Callback to be called when edit mode should be exited */
    exitEditMode: () => void;
};
/** Type of the Spreadsheet DataEditor component */
declare type DataEditorComponent<Cell extends CellBase = CellBase> = React.ComponentType<DataEditorProps<Cell>>;
/** Type of the Spreadsheet Table component props */
declare type TableProps = React.PropsWithChildren<{
    /** Numebr of columns the table should render */
    columns: number;
    /** Whether column indicators are hidden */
    hideColumnIndicators?: boolean | null;
}>;
/** Type of the Spreadsheet Table component */
declare type TableComponent = React.ComponentType<TableProps>;
/** Type of the Spreadsheet Row component props */
declare type RowProps = React.PropsWithChildren<{
    /** The row index of the table */
    row: number;
}>;
/** Type of the Row component */
declare type RowComponent = React.ComponentType<RowProps>;
/** Type of the Spreadsheet HeaderRow component props */
declare type HeaderRowProps = React.PropsWithChildren<{}>;
/** Type of the HeaderRow component */
declare type HeaderRowComponent = React.ComponentType<HeaderRowProps>;
/** Type of the Spreadsheet RowIndicator component props */
declare type RowIndicatorProps = {
    /** The row the indicator indicates */
    row: number;
    /** A custom label for the indicator as provided in rowLabels */
    label?: React.ReactNode | null;
    /** Whether the entire row is selected */
    selected: boolean;
    /** Callback to be called when the row is selected */
    onSelect: (row: number, extend: boolean) => void;
};
/** Type of the RowIndicator component */
declare type RowIndicatorComponent = React.ComponentType<RowIndicatorProps>;
/** Type of the Spreadsheet ColumnIndicator component props */
declare type ColumnIndicatorProps = {
    /** The column the indicator indicates */
    column: number;
    /** A custom label for the indicator as provided in columnLabels */
    label?: React.ReactNode | null;
    /** Whether the entire column in selected */
    selected: boolean;
    /** Callback to be called when the column is selected */
    onSelect: (column: number, extend: boolean) => void;
};
/** Type of the ColumnIndicator component */
declare type ColumnIndicatorComponent = React.ComponentType<ColumnIndicatorProps>;
/** Type of the Spreadsheet CornerIndicator component props */
declare type CornerIndicatorProps = {
    /** Whether the entire table is selected */
    selected: boolean;
    /** Callback to select the entire table */
    onSelect: () => void;
};
/** Type of the CornerIndicator component */
declare type CornerIndicatorComponent = React.ComponentType<CornerIndicatorProps>;

/** The Spreadsheet component props */
declare type Props<CellType extends CellBase> = {
    /** The spreadsheet's data */
    data: Matrix<CellType>;
    /** Class to be added to the spreadsheet element */
    className?: string;
    /** Use dark colors that complenent dark mode */
    darkMode?: boolean;
    /**
     * Instance of `FormulaParser` to be used by the Spreadsheet.
     * Defaults to: internal instance created by the component.
     */
    formulaParser?: Parser;
    /**
     * Labels to use in column indicators.
     * Defaults to: alphabetical labels.
     */
    columnLabels?: string[];
    /**
     * Labels to use in row indicators.
     * Defaults to: row index labels.
     */
    rowLabels?: string[];
    /**
     * If set to true, hides the row indicators of the spreadsheet.
     * Defaults to: `false`.
     */
    hideRowIndicators?: boolean;
    /**
     * If set to true, hides the column indicators of the spreadsheet.
     * Defaults to: `false`.
     */
    hideColumnIndicators?: boolean;
    /** Component rendered above each column. */
    ColumnIndicator?: ColumnIndicatorComponent;
    /** Component rendered in the corner of row and column indicators. */
    CornerIndicator?: CornerIndicatorComponent;
    /** Component rendered next to each row. */
    RowIndicator?: RowIndicatorComponent;
    /** The Spreadsheet's table component. */
    Table?: TableComponent;
    /** The Spreadsheet's row component. */
    Row?: RowComponent;
    /** The spreadsheet's header row component */
    HeaderRow?: HeaderRowComponent;
    /** The Spreadsheet's cell component. */
    Cell?: CellComponent<CellType>;
    /** Component rendered for cells in view mode. */
    DataViewer?: DataViewerComponent<CellType>;
    /** Component rendered for cells in edit mode. */
    DataEditor?: DataEditorComponent<CellType>;
    /** Callback called on key down inside the spreadsheet. */
    onKeyDown?: (event: React.KeyboardEvent) => void;
    /**
     * Calculate which cells should be updated when given cell updates.
     * Defaults to: internal implementation which infers dependencies according to formulas.
     */
    getBindingsForCell?: GetBindingsForCell<CellType>;
    /** Callback called when the Spreadsheet's data changes. */
    onChange?: (data: Matrix<CellType>) => void;
    /** Callback called when the Spreadsheet's edit mode changes. */
    onModeChange?: (mode: Mode) => void;
    /** Callback called when the Spreadsheet's selection changes. */
    onSelect?: (selected: Point[]) => void;
    /** Callback called when Spreadsheet's active cell changes. */
    onActivate?: (active: Point) => void;
    /** Callback called when the Spreadsheet loses focus */
    onBlur?: () => void;
    onCellCommit?: (prevCell: null | CellType, nextCell: null | CellType, coords: null | Point) => void;
};
/**
 * The Spreadsheet component
 */
declare const Spreadsheet: <CellType extends CellBase<any>>(props: Props<CellType>) => React.ReactElement;

/** The default Spreadsheet DataEditor component */
declare const DataEditor: React.FC<DataEditorProps>;

/** The default Spreadsheet DataViewer component */
declare const DataViewer: <Cell extends CellBase<Value>, Value>({ cell, formulaParser, }: DataViewerProps<Cell>) => React.ReactElement;

declare type FormulaParseResult = string | boolean | number;
declare type FormulaParseError = string;
/** Get the computed value of a cell. */
declare function getComputedValue<Cell extends CellBase<Value>, Value>({ cell, formulaParser, }: {
    cell: Cell | undefined;
    formulaParser: hotFormulaParser.Parser;
}): Value | FormulaParseResult | FormulaParseError | null;

export { CellBase, CellChange, CellComponent, CellComponentProps, CellDescriptor, ColumnIndicatorComponent, ColumnIndicatorProps, CornerIndicatorComponent, CornerIndicatorProps, DataEditor, DataEditorComponent, DataEditorProps, DataViewer, DataViewerComponent, DataViewerProps, Dimensions, GetBindingsForCell, HeaderRowComponent, HeaderRowProps, Matrix, Mode, Point, Props, RowComponent, RowIndicatorComponent, RowIndicatorProps, RowProps, Spreadsheet, TableComponent, TableProps, createEmpty as createEmptyMatrix, Spreadsheet as default, getComputedValue };
