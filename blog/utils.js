// Some utils for the blog

export const autosplit = (text) => text.trim().replaceAll("\n", "<br />");

export const autosplit2 = (text) => text.split(/\n{2,}/)
                                        .map(t => {
                                            if (t.startsWith("<"))
                                                return t;
                                            return `<p>${t.trim()}</p>`;
                                        })
                                        .join("");
