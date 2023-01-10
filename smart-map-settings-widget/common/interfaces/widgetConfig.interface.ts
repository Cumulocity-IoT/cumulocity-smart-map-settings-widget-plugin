/**
 * Copyright (c) 2020 Software AG, Darmstadt, Germany and/or its licensors
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface WidgetConfig {
    name?: string;
    floorPlanType?: string;
    floorLevel?: number;
    contentType?: string;
    id?: any;
    fileName?: any;
    type?: string;
    layer?: any;
}

export interface ConfigCoordinates {
    lng?: any;
    lat?: any;
}

export interface BuildingConfig {
    id?: any;
    name?: any;
    assetType?: any;
    location?: any;
    type?: string;
    levels?: any[];
    coordinates?: any;
}

export interface GeofenceConfig {
    id?: any;
    name?: String;
    coordinates?: any;
    smartRuleConfig?: SmartRuleConfig;
}

export interface SmartRuleConfig {
    smartRule?: String;
    smartRuleId?: string;
    smartRuleName?: String;
    smartRuleTrigger?: String;
    smartRuleType?: String;
    smartRuleSeverity?: String;
    smartRuleText?: String;
    smartRuleDevcie?: String;
}
