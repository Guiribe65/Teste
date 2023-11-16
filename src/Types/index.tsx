/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/ban-types */
import React, { FunctionComponent } from "react";

// import { WordResponse } from "@components/Forms/Select/Word";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

export type berrySelectOptions = {
  key: string;
  value: string;
};
export interface TabsProps {
  children?: React.ReactElement | React.ReactNode | string;
  value: string | number;
  index: number;
}

export interface GenericCardProps {
  title?: string;
  primary?: string | number | undefined;
  secondary?: string;
  content?: string;
  image?: string;
  dateTime?: string;
  iconPrimary?: OverrideIcon;
  color?: string;
  size?: string;
}

export type OverrideIcon =
  | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    })
  | React.ComponentClass<any>
  | FunctionComponent<any>;

export type PropertiesPanelProps = {
  nodeData?: any;
  onChange: (name: string, value: string) => void;
  active?: boolean;
  // wordResponseList?: WordResponse[];
};

export type Options = {
  key: string;
  label: string;
  id: number;
};

export type WorkflowResponse = {
  ServicoAnaliseCodigo: string;
  ServicoAnaliseNome: string;
  IdUsuario: number;
};

export type SelectOptions = {
  label: string;
  key: string;
};