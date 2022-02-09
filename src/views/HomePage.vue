<template>
    <div>
        <GioiThieu></GioiThieu>
        <DichVu></DichVu>
        <QuyTrinh></QuyTrinh>
        <ThuVienAnh></ThuVienAnh>
        <Review></Review>
    </div>
</template>
<script>
import GioiThieu from "./components/GioiThieu";
import DichVu from "./components/DichVu";
import QuyTrinh from "./components/QuyTrinh";
import ThuVienAnh from "./components/ThuVienAnh";
import Review from "./components/Review";

export default {
  name: "homepage",
  components: {
    GioiThieu,
    DichVu,
    QuyTrinh,
    ThuVienAnh,
    Review,
  }
};
</script>
