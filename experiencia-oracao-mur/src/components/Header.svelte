<header>
    <img class="logo" src={logoImg} alt="Logo MUR Lavras"/>
    <nav>
        <div class="content">
            <button class="content__menu-button">
                {#if !showMobileMenu}
                    <img on:click={handleMobileMenuClick} src={menuImg} alt=""/>
                {:else}
                    <img on:click={handleMobileMenuClick} src={closeImg} alt=""/>
                {/if}
            </button>
            <ul class={`content__navbar-list${showMobileMenu ? ' content__navbar-list--mobile' : ''}`}>
                {#each navItems as item}
                <li>
                    <a href={item.href}>{item.label}</a>
                </li>
                {/each}
            </ul>
        </div>
    </nav>
</header>

<script>
    import logoImg from "../assets/logo.jpeg";
    import menuImg from "../assets/menu.svg"
    import closeImg from "../assets/close.png"
    import { onMount } from "svelte";

    const navItems = [
        { label: "logo", href: "#" },
        { label: "Item 1", href: "#" },
        { label: "Item 2", href: "#" },
        { label: "Item 3", href: "#" },
        { label: "Item 4", href: "#" },
        { label: "Item 5", href: "#" },
        { label: "Item 6", href: "#" },
        { label: "Item 7", href: "#" }
    ];

    onMount(() => {
        const windowMediaEvetnListener = window.matchMedia("(max-width: 767px)");
        windowMediaEvetnListener.addEventListener(mediaEventQueryHandler);
    });

    let showMobileMenu = false;

    const handleMobileMenuClick = () => (showMobileMenu = !showMobileMenu)

    const mediaEventQueryHandler = event => {
        if (!event.matches) {
            showMobileMenu = false;
        }
    };

</script>

<style type="scss">
    header {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        background-color: transparent;
        height: 60px;
        padding: 0 20px;

        .logo {
            width: 55px;
            height: auto;
        }

        nav {
            .content {
                display: flex;
                align-items: center;

                &__menu-button {
                    border: none;
                    background: none;
                    
                    @media only screen and (min-width: 720px) {
                        display: none;
                    }

                    img {
                        width: 24px;
                        height: auto;
                    }
                } 

                &__navbar-list {
                    display: flex;
                    list-style-type: none;
                    flex-direction: row;
                    
                    li + li {
                        margin-left: 10px;
                    }

                    
                    @media only screen and (max-width: 720px) {
                        flex-direction: column;
                    }
                }
                
            }
        }

    }
</style>
    