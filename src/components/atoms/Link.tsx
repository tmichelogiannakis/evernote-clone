import React, { FunctionComponent } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as RebassLink, LinkProps as RebassLinkProps } from 'rebass';

type LinkProps = RebassLinkProps & RouterLinkProps & {};

const Link: FunctionComponent<LinkProps> = (props: LinkProps) => <RebassLink {...props} as={RouterLink} />;

export default Link;
