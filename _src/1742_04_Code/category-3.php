<?php
/**
 * The template for displaying Category Archive pages.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */

get_header(); ?>

		<div id="container">
			<div id="content" role="main">

				<h1 class="page-title">Upcoming <?php single_cat_title(); ?></h1>
				<?php
					$category_description = category_description();
					if ( ! empty( $category_description ) )
						//echo '<div class="archive-meta">' . $category_description . '</div>';

				/* Run the loop for the category page to output the posts.
				 * If you want to overload this in a child theme then include a file
				 * called loop-category.php and that will be used instead.
				 */
				//get_template_part( 'loop', 'category' );
				?>
				
	 <?php while (have_posts()) : the_post(); ?>
		<div <?php post_class() ?>>
				<h2 id="post-<?php the_ID(); ?>" class="entry-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h3>

				<div class="entry">
					<?php the_content() ?>
				</div>
				
				<p><a class="register" href="/wp-jqury/register/?evnt=<?php the_title(); ?>">Register</a></p>
				
				<div class="register-separate"></div>

			</div>

		<?php endwhile; ?>

			</div><!-- #content -->
		</div><!-- #container -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
