export default (text) => text.split(/\n{2,}/)
                                        .map(t => {
                                            if (t.startsWith("<"))
                                                return t;
                                            return `<p>${t.trim()}</p>`;
                                        })
                                        .join("");
