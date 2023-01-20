/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Tree } from '@angular-devkit/schematics';
/** The shortcut of `addPackageToPackageJson` */
export declare function addPackage(host: Tree, pkgverion: string, type?: string): void;
/** Adds a package to the package.json in the given host tree. */
export declare function addPackageToPackageJson(host: Tree, pkg: string, version: string, type?: 'dependencies' | 'devDependencies'): Tree;
/** Gets the version of the specified package by looking at the package.json in the given tree. */
export declare function getPackageVersionFromPackageJson(tree: Tree, name: string): string | null;
/** Adds scripts to the package.json */
export declare function addScriptToPackageJson(host: Tree, name: string, value: string): Tree;
