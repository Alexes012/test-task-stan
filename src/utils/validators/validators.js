import React from "react";

export const required = value => {
    if (value) return undefined;

    return "*Это поле обязательно";
};

