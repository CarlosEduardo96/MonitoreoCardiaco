<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Monitoreo Cardiaco</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" Right>
            <span class="text-white">
                <b-avatar variant="primary" text="U"></b-avatar>
                Usuario
            </span>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>
<script>
export default {
    name:"Navbar"
}
</script>