const parseEnv = () => {
    const keysRSS = Object.keys(process.env).filter(key => key.startsWith("RSS_"));
    const str = keysRSS.map(key => `${key}=${process.env[key]}`).join("; ");
    console.log(str);
};

parseEnv();